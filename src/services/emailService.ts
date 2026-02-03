import type { EmailResult } from '../types/emailResult';
import api from './api';

export const classifyEmail = async (
  file: File | null,
  text: string,
): Promise<EmailResult> => {
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post<EmailResult>(
      '/api/analyze-email/file',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );
    return response.data;
  }

  if (text) {
    const response = await api.post<EmailResult>('/api/analyze-email/json', {
      text,
    });
    return response.data;
  }

  throw new Error('É necessário fornecer texto ou arquivo.');
};
