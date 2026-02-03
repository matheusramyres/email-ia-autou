import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import starAi from '../../assets/ai-star.svg';
import type { EmailResult } from '../../types/emailResult';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { SkeletonEmailResponse } from '../skeletons/SkeletonEmailResponse';

interface EmailResponseProps {
  verifiedEmail: boolean;
  loading: boolean;
  emailResult: EmailResult | null;
  textRef: React.RefObject<HTMLTextAreaElement | null>;
  handleNewEmail: () => void;
}

export const EmailResponse = ({
  verifiedEmail,
  loading,
  emailResult,
  textRef,
  handleNewEmail,
}: EmailResponseProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = async () => {
    if (!textRef.current) return;

    const text = textRef.current.value;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNotify = () => {
    toast.success('Texto copiado!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  useEffect(() => {
    if (!copied) return;

    handleNotify();
  }, [copied]);
  return (
    <>
      {loading && <SkeletonEmailResponse />}
      {verifiedEmail && !loading && (
        <div className="response-analysis mt-16">
          <div
            className={clsx(
              'w-full p-6',
              'shadow-[0_0_20px_-6px] shadow-white/25',
              'rounded-4xl border border-white/20',
              'text-[#C3C3C3] bg-[#1A1F26]/80',
            )}
          >
            <div className="category">
              <p className="text-[16px] text-white font-semibold">Categoria:</p>
              <Badge status={emailResult?.productivity || 'Produtivo'} />
            </div>
            <div className="suggested-answer flex flex-col">
              <p className="mt-3.5 text-[16px] text-white font-semibold">
                Resposta sugerida:
              </p>
              <div className="sub-text mt-5 flex just">
                <img src={starAi} />
                <p className="ml-1 text-[14px]">
                  Resposta gerada automaticamente por IA
                </p>
              </div>
              <div className="email-answer rounded-3xl min-h-20">
                <textarea
                  ref={textRef}
                  className={clsx(
                    'w-full min-h-40 mt-3.5 p-3.5',
                    'rounded-3xl outline-none',
                    'scroll-invisible',
                    'text-[#1F1F1F] bg-white',
                  )}
                  readOnly
                  value={emailResult?.auto_reply}
                ></textarea>
              </div>
              <div
                className={clsx(
                  'mt-3.5 flex-col md:flex-row',
                  'group-button-answer',
                  'flex justify-between',
                )}
              >
                <Button
                  title="Classificar novo email"
                  variant="secondary"
                  aria-label="Classificar novo email"
                  onClick={handleNewEmail}
                />
                <Button
                  title="Copiar resposta"
                  variant="primary"
                  aria-label="Copiar resposta"
                  className="mt-2.5 md:mt-0"
                  onClick={handleCopyText}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
