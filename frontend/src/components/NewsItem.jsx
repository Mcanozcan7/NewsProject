import PropTypes from 'prop-types';

function NewsItem({ item }) {
    const websiteUrl = item.url;
    const website = websiteUrl.split('https://').pop().split('/')[0];

    const data = item.publishedAt;
    const formatData = data.replace('T', ' ');
    const formatTime = formatData.replace('Z', '');

    return (
        <a href={item.url} className="article" rel="noopener noreferrer" target="_blank">
            {item.urlToImage && (
                <div className="article-image">
                    <img src={item.urlToImage} alt={item.title} />
                </div>
            )}
            <div className="article-content">
                <div className="article-source">
                    <img
                        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${website}`}
                        alt={item.source.name}
                    />
                    <span>{item.source.name}</span>
                </div>
                <div className="article-title">
                    <h2>{item.title}</h2>
                </div>
                <p className="article-description">{item.description}</p>
                <div className="article-details">
                    <small><b>Published At : </b>{formatTime}</small>
                </div>
            </div>
        </a>
    );
}

NewsItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string.isRequired,
        source: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};

export default NewsItem;
