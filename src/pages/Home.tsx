import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import starAi from '../assets/ai-star.svg';
import { EmailContent, EmailResponse, Header } from '../components';
import { classifyEmail } from '../services/emailService';
import type { EmailResult } from '../types/emailResult';

export const Home = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [emailResult, setEmailResult] = useState<EmailResult | null>(null);
  const [loading, setLoading] = useState(false);

  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 50) {
        headerRef.current.classList.add('before:opacity-100');
      } else {
        headerRef.current.classList.remove('before:opacity-100');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleVerifyeEmail = async () => {
    if (!file && !text) {
      toast.warning('Insira um texto ou faça upload de arquivo.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    setVerifiedEmail(true);
    try {
      const result = await classifyEmail(file, text || '');
      setEmailResult(result);
      setLoading(false);

      setText('');
      setFile(null);

      if (file && textRef.current) textRef.current.value = '';
    } catch (err) {
      console.error(err);
      alert('Erro ao processar o email. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleNewEmail = () => {
    setVerifiedEmail(false);
    handleClearFile();
  };

  const handleClearFile = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div
      className={clsx(
        'relative min-h-screen',
        'bg-linear-to-t from-[#0D1117] to-[#161B22]',
      )}
    >
      <div className="effect-blur absolute inset-0 z-0">
        <div
          className={clsx(
            'w-80 h-80',
            'fixed top-0 left-0 rounded-[50%]',
            'bg-[#8499FF] blur-[190px] ',
          )}
        ></div>
        <div
          className={clsx(
            'w-80 h-80',
            'fixed bottom-0 right-0 rounded-tl-[50%] ',
            'bg-[#A25EF5] blur-[190px]',
          )}
        ></div>
      </div>

      <Header headerRef={headerRef} />
      <main className="content-page sticky p-7">
        <div className="flex flex-col items-center justify-center mt-32">
          <div className="max-w-152 w-full mb-25 md:mb-0">
            <div className="first-text flex">
              <p className=" text-white md:text-[22px]  mr-2">
                Seu assistente inteligente de emails
              </p>
              <img src={starAi} />
            </div>
            <p className="second-text text-[26px] md:text-4xl text-white mt-5">
              Automatize classificações e respostas com IA
            </p>

            <EmailContent
              file={file}
              handleClearFile={handleClearFile}
              handleVerifyeEmail={handleVerifyeEmail}
              text={text}
              setText={setText}
              inputRef={inputRef}
              verifiedEmail={verifiedEmail}
              setEmailResult={setEmailResult}
              setVerifiedEmail={setVerifiedEmail}
              textRef={textRef}
              setFile={setFile}
              setLoading={setLoading}
            />

            <EmailResponse
              verifiedEmail={verifiedEmail}
              loading={loading}
              emailResult={emailResult}
              textRef={textRef}
              handleNewEmail={handleNewEmail}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
