import React, { useState } from 'react';

const Bookmark = ({ article }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
       
    };

    return (
        <div>
            <button onClick={toggleBookmark}>
                {bookmarked ? 'Unbookmark' : 'Bookmark'}
            </button>
        </div>
    );
};

export default Bookmark;
