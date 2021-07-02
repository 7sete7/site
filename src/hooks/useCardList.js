import { useEffect, useCallback } from "react";

const useCardList = ({ onChange, onSave, values }) => {
  const onCardSave = useCallback(({ id, post }) => {
    const posts = Array.from(values.data);
    const postIdx = posts.findIndex(p => p.id === id);
    posts[postIdx] = { id, ...post };

    onChange("data")({ target: posts });
    onChange("changed")({ target: true });
  }, [values.data, onChange]);

  useEffect(() => { values?.data && values.changed && onSave() }, [values.data, values.changed]);

  const onNewCard = useCallback(() => {
    const posts = Array.from(values.data || []);
    posts.push({ id: Math.random().toString(36).slice(-10) });

    onChange("data")({ target: posts });
  }, [values.data, onChange]);

  const onCardDelete = useCallback(({ id }) => {
    const posts = Array.from(values.data || []);
    const removed = posts.filter(p => p.id !== id);

    onChange("data")({ target: removed });
    onChange("changed")({ target: true });
  }, [values.data, onChange]);

  return { onCardDelete, onCardSave, onNewCard };
};

export default useCardList;