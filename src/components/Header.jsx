function Header({validateForm, word, fillField}) {
    return (
        <header className='header'>
            <div className="header__bar header__container">
            <h1 className='header__title'>Dictionary</h1>
            <form className='header__form' onSubmit={validateForm}>
                <label className='header__form-label'>Type a word:</label>
                <input
                    className='header__form-input'
                    type="text"
                    value={word}
                    onChange={fillField}
                />
            </form>
            </div>
        </header>
    )
}

export default Header;