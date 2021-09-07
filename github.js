class GitHub {
    constructor() {
        this.client_id = '098f4c932e8fe90722db'
        this.client_secret = 'dd3dc46377240bfdadf8809003d52e6e9e9794b1'
        this.repos_retrieve = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_retrieve}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}