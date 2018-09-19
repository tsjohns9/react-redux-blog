import React from 'react';

const Comment = ({ name, body }) => {
  const shortName = new Set(name.split(' ')).values();
  const first = shortName.next().value;
  const last = shortName.next().value;

  const full = last
    ? first.charAt(0).toUpperCase() +
      first.slice(1) +
      ' ' +
      last.charAt(0).toUpperCase() +
      last.slice(1)
    : first.charAt(0).toUpperCase() + first.slice(1);

  return (
    <div style={{ borderBottom: '1px solid #eee' }}>
      <p className="my-4">
        <b>{full}</b>
      </p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
