import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"

export default function Corpo () {

return (
            <div class="principal">
                <div class="container">
                    <div class="stories-feed">
                        <Stories />
                        <Posts />
                    </div>
                        <Sidebar />
                </div>
            </div>
)
}