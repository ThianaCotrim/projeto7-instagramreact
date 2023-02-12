export default function RenderizarStories (props){

    return (
            <div>
            <div class="individual">
            <div class="argola">
                <img src={props.img} />
            </div>
                {props.name}
        </div>
        </div>
)
}