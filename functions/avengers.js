exports.handler = async () => {
    console.log('function ran');

    const data = { name: 'natasha', age: 35, job: 'avenger'}

    // return response to browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}