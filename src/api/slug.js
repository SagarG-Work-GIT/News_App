const slugs = [
    "everything?q=apple&from=2023-10-01&to=2023-10-01&sortBy=popularity&apiKey=d9bd23777d62485fa2ac9d5098a49200",
    "everything?q=tesla&from=2023-09-02&sortBy=publishedAt&apiKey=d9bd23777d62485fa2ac9d5098a49200",
    "top-headlines?country=us&category=business&apiKey=d9bd23777d62485fa2ac9d5098a49200",
    "top-headlines?sources=techcrunch&apiKey=d9bd23777d62485fa2ac9d5098a49200",
    "everything?domains=wsj.com&apiKey=d9bd23777d62485fa2ac9d5098a49200"
]

export const slug = slugs[Math.floor(Math.random()*slugs.length)];

export const getRandomSlugs = () => {
    return  slugs[Math.floor(Math.random()*slugs.length)];
}
