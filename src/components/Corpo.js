import Post from "./Post"
import Sidebar from "./Sidebar"
import Story from "./Story"

const Corpo = () => {
        return (
            <div class="principal">
                <div class="container">
                    <div class="stories-feed">
                        <Story />
                        <Post/>
                    </div>
                        <Sidebar />
                </div>
            </div>
)
}
export default Corpo