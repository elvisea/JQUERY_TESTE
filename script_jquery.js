$(function () {
    $('button').on('click', async function () {
        const response = await $.ajax({ url: 'https://api.github.com/users/elvisea/repos' })
        
        console.log('====================================');
        console.log(response);
        console.log('====================================');
    })
})