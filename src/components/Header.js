// import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAddBtn, showAdd}) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onAddBtn={onAddBtn} showAdd={showAdd} text={ showAdd ? 'Close': 'Add task'  }/>

        </header>
    )
}

// Header.defaultProps = {
//     title: 'Task Tracker',
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default Header
