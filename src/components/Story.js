import story from "./arrayDeStories"
import RenderizarStories from "./RenderizarStories"

const Story = () => {

return (
    <div class="stories">
    <div class="todos-stories">
        {story.map((p) => (
        <div>
            <RenderizarStories img={p.img} name={p.name}/>
        </div>
        ))}
        
        <ion-icon class="chevron-circle" name="chevron-forward-circle"></ion-icon>
    </div>
</div> 
)
}

export default Story