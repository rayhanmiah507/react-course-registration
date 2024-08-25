import PropTypes from 'prop-types'


const Bookmark = ({ datashow }) => {
    const { title } = datashow;
    return (

        <div className=''>
            <li>{title}</li>
        </div>

    );
};

Bookmark.propTypes = {
    datashow: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bookmark;