

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.linkedin.com/in/mcmachete"
             target="_blank"
             rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png"/>
            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.twitter.com/mcmachete7"
             target="_blank"
             rel="noreferrer"
            >
                <img alt="twitter-link" src="../assets/twitter.png"/>
            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.github.com/UncleMac7"
             target="_blank"
             rel="noreferrer"
            >
                <img className="w-8 h-8" alt="GitHub-link" src="../assets/github.png"/>
                
            </a>
        </div>
    )
}
export default SocialMediaIcons;