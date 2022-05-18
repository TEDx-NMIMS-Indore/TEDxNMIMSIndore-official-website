import "./memberProfile.scss";

export default function MemberProfile(props) {
    function addDefaultSrc(ev) {
        if (props.gender == "Female") {
            ev.target.src = "images/femaleIcon.webp";
        } else {
            ev.target.src = "images/maleIcon.webp";
        }
    }
    return (
        <div className="profileDiv">
            <div className="profileImageDiv">
                <img
                    src={props.profileImage}
                    className="profileImage"
                    onError={addDefaultSrc}
                    alt={"Profile picture of " + props.name}
                    decoding="async"
                />
            </div>
            <div className="name">{props.name}</div>
            <div className="post">{props.post}</div>
            <div className="introduction">{props.introduction}</div>
        </div>
    );
}
