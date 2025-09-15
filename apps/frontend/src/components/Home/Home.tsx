import { Upload, Send, Loader2 } from "lucide-react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { analyzeImage } from "../../services/images/images.services";
import { useCallback, useState } from "react";
import type { TagsResponse } from "@image-analyzer/types";
import { getError } from "./Home.utils";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<TagsResponse | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
    },
    [files]
  );

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const error = fileRejections
      .map(fileRejection => fileRejection.errors.map(error => getError(error.code)))
      .join(", ");
    setError(error);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tiff", ".ico", ".webp"]
    },
    maxFiles: 1,
    maxSize: 1 * 1024 * 1024, // 5MB
    onDrop,
    onDropRejected
  });

  const selectedFile = files[0];

  const handleAnalyzeImage = async () => {
    if (files.length === 0) return;
    try {
      setIsLoading(true);
      const response = await analyzeImage(files[0]);
      setResponse(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearResults = () => {
    setResponse(null);
    setFiles([]);
    setError(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Image Analyzer
          </h1>
        </div>

        <div
          {...getRootProps({
            className:
              `relative flex flex-col items-center justify-center gap-3 p-8 rounded-xl border-2 border-dashed transition-all ` +
              `${isDragActive ? "border-blue-400 bg-blue-50/60" : "border-slate-300 hover:border-slate-400 hover:bg-slate-50"}`
          })}
        >
          <input {...getInputProps()} />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-500">
            <Upload />
          </div>
          <p className="text-slate-700 text-center font-medium">
            {isDragActive ? "Suelta la imagen aquí" : "Arrastra y suelta una imagen"}
          </p>
          <p className="text-slate-500 text-sm text-center">o haz clic para seleccionar un archivo (máx. 5MB)</p>
        </div>

        {error && (
          <div className="mt-2">
            <p className="text-sm text-center text-red-500">{error}</p>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Imagen seleccionada</h2>
          {selectedFile ? (
            <div className="mt-3 flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Imagen seleccionada"
                width={96}
                height={96}
                className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-md border border-slate-200"
              />
              <div className="min-w-0">
                <p className="text-slate-800 text-sm md:text-base truncate max-w-[220px] md:max-w-[320px]">
                  {selectedFile.name}
                </p>
                <p className="text-slate-500 text-xs mt-1">{Math.round(selectedFile.size / 1024)} KB</p>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-slate-500">Aún no has seleccionado ninguna imagen.</p>
          )}
        </div>

        {response && (
          <>
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Resultados</h2>
            </div>
            <div className="mt-3 flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 flex-wrap">
              {response.tags.map(tag => (
                <div
                  key={tag.label}
                  className="text-slate-800 text-sm md:text-base truncate max-w-[220px] md:max-w-[320px] bg-slate-100 p-2 rounded-md"
                >
                  {tag.label} - {(tag.confidence * 100).toFixed(0)}%
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-700 disabled:bg-slate-300 disabled:text-slate-600 shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            onClick={handleClearResults}
            disabled={(!response && !error) || isLoading}
          >
            Limpiar resultados
          </button>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:text-slate-600 shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            disabled={!selectedFile || isLoading}
            onClick={handleAnalyzeImage}
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send />}
            Analizar imagen
          </button>
        </div>
      </div>
    </div>
  );
};
