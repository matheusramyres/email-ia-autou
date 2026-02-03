import { IonIcon } from '@ionic/react';
import clsx from 'clsx';
import { closeCircle } from 'ionicons/icons';
import type { EmailResult } from '../../types/emailResult';
import { Button } from '../Button';

interface EmailContentProps {
  text: string;
  setText: (txt: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  file: File | null;
  setFile: (file: File | null) => void;
  verifiedEmail: boolean;
  setLoading: (value: boolean) => void;
  setEmailResult: (result: EmailResult) => void;
  setVerifiedEmail: (verified: boolean) => void;
  textRef: React.RefObject<HTMLTextAreaElement | null>;
  handleClearFile: () => void;
  handleVerifyeEmail: () => void;
}

export const EmailContent = ({
  setText,
  inputRef,
  file,
  setFile,
  verifiedEmail,
  handleClearFile,
  handleVerifyeEmail,
}: EmailContentProps) => {
  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;
    setFile(selected);
  };
  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  return (
    <>
      {!verifiedEmail && (
        <div className="email-content">
          <textarea
            className={clsx(
              'w-full h-52.5 mt-6 p-6',
              'scroll-invisible outline-none',
              'shadow-[0_0_20px_-6px] shadow-white/40',
              'rounded-4xl border border-white/60',
              'text-[#C3C3C3] bg-white/5',
            )}
            readOnly={Boolean(file?.name)}
            placeholder="Cole aqui o conteúdo do email aqui..."
            onChange={handleChangeText}
          ></textarea>
          <div className="flex justify-between mt-7 flex-col md:flex-row">
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.txt"
            />
            <Button
              title="Upload de arquivo"
              variant="secondary"
              aria-label="Upload de arquivo"
              onClick={handleUploadFile}
            />

            <Button
              title="Analisar email"
              variant="primary"
              aria-label="Analisar email"
              className="mt-2.5 md:mt-0"
              onClick={handleVerifyeEmail}
            />
          </div>
          {file && (
            <div className="flex items-center justify-center mt-7">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">
                  Arquivo selecionado:
                </span>
                {` ` + file.name}
              </p>
              <button
                aria-label="Excluir arquivo selecionado"
                className="ml-1.5 flex items-center cursor-pointer"
                onClick={handleClearFile}
              >
                <IonIcon
                  className="text-red-200"
                  icon={closeCircle}
                  size="small"
                  color=""
                />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
