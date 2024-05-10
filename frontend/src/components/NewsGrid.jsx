import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

function NewsGrid({ items }) {
    return (
        <div className='news-grid'>
            {items.map((item, i) => (
                <NewsItem key={i} item={item} />
            ))}
        </div>
    );
}

NewsGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsGrid;
