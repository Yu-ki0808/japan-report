import React from 'react';

const AutoBreakP = ({ children, className }) => {
  // 子要素が文字列でない場合（例: JSX要素）はそのまま返す
  if (typeof children !== 'string') {
    return <p className={className}>{children}</p>;
  }

  // テキストを全角ピリオドで分割（空の要素を除外）
  const sentences = children.split('。').filter(sentence => sentence.trim() !== '');

  return (
    <p className={className}>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {sentence}。
          {index < sentences.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};

export default AutoBreakP;