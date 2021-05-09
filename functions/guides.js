exports.handler = async (e, context) => {
    const guides = [
        { title: 'Captain America: The winter Soldier', author: 'tony'},
        { title: 'Captain America: The first avenger', author: 'kiki'},
        { title: 'Black Panther: Wakanda Forever', author: 'kirio'},
    ]

    if(context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'Oops, you must be logged in to view this!!!'})
    }

}