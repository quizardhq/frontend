import React from 'react';
import Image from 'next/image';

import { ErrorIcon } from '@/components/assets';

function Success({ message }: { message: string }) {
  return (
    <div>
      {' '}
      <span>{message}</span>
    </div>
  );
}

/**
 * Error Alert Text
 * @message message string
 */
function Error({ message }: { message: string }) {
  return (
    <div className="text-[#BA1A1A] text-[12px] my-3 flex items-center">
      <Image alt="error" src={ErrorIcon} />
      <span>{message}</span>
    </div>
  );
}

function Info({ message }: { message: string }) {
  return (
    <div>
      {' '}
      <span>{message}</span>
    </div>
  );
}

function Warining({ message }: { message: string }) {
  return (
    <div>
      {' '}
      <span>{message}</span>
    </div>
  );
}

const Alert = {
  Success,
  Error,
  Info,
  Warining,
};

export default Alert;
