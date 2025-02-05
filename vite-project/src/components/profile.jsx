function Profile(){
    return (
        <div>
            <h1>Profile card</h1>
            <ProfileCard >
                name = "Kamini"
                age = {24}
                profession = "Software Developer"
                greeting = {
                    <div>
                        <strong>Hi, I am Kamini</strong>
                    </div>
                }
                
                <p>Hobbies: Raading Books, Codding</p>
                <button>Cantact</button>
            </ProfileCard>

            <ProfileCard >
                name = "Kamini pal"
                age = {24}
                profession = "web Developer"
                greeting = {
                    <div>
                        <strong>Hi, I am Kamini pal</strong>
                    </div>
                }
                
                <p>Hobbies: Raading Books, Codding, exercise</p>
                <button>Cantact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;

  function ProfileCard(props){
      return (
          <div>
              <h2>Name: {props.name}</h2>
              <h3>Age: {props.age}</h3>
              <p>Profession: {props.profession}</p>
              <p>{props.greeting}</p>
              <p>{props.children}</p>
              
          </div>
      )
  }