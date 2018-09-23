function formatDate(publishedDate) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const published = new Date(publishedDate);
  return published.toLocaleDateString('en-US', options);
}

export default formatDate;
