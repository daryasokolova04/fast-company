const Phrase = ({ length }) => {
  const renderClass = () => {
    if (length > 0) return "badge bg-primary m-2";
    return "badge bg-danger m-2";
  };

  const renderPhrase = (length) => {
    if (length === 0) {
      return "Встреч не будет";
    } else if (length === 1)
      return length + " человек встретится с тобой сегодня";
    else if (2 <= length && length <= 4)
      return length + " человека встретятся с тобой сегодня";
    return length + " человек встретятся с тобой сегодня";
  };

  return (
    <h1>
      <span className={renderClass()}>{renderPhrase(length)}</span>
    </h1>
  );
};

export default Phrase;
