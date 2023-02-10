const Story = () => {

    let story = [

        {img:"./img/9gag 1 (2).png", name:"9gag"},
        {img:"./img/meowed 1 (3).png", name:"meowed"},
        {img:"./img/barked 1 (2).png", name:"barked"},
        {img:"./img/nathanwpylestrangeplanet 1 (2).png", name:"nathan.."},
        {img:"./img/wawawiwacomicsa 1 (2).png", name:"wawa.."},
        {img:"./img/respondeai 1 (2).png", name:"respondeai"},
        {img:"./img/filomoderna 1 (2).png", name:"filomode."},
        {img:"./img/memeriagourmet 1 (2).png", name:"memeria.."},
        {img:"./img/barked 1 (2).png", name:"9gag"},
        {img:"./img/barked 1 (2).png", name:"9gag"}
    ]

    return (
        <div class="stories">
        <div class="todos-stories">
        {story.map((s) => (
            <div class="individual">
            <div class="argola">
                <img src={s.img} />
            </div>
                {s.name}
         </div>
         
        ))}
        <ion-icon class="chevron-circle" name="chevron-forward-circle"></ion-icon>
    </div>
</div> 
    )
}

export default Story