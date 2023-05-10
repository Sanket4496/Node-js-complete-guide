exports.get404 = (req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
    res.status(404).render('404', {docTitle: 'Page Not Found', path: ''});
};