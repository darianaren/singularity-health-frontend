export const parsedCards = ({ reviewers, body }) => {
  return reviewers.map(({ id, first_name, last_name, avatar }) => ({
    id,
    body,
    image: { src: avatar, alt: first_name },
    title: first_name + " " + last_name
  }));
};
