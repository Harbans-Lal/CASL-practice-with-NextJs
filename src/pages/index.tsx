// Home.js
import React, {useContext, useEffect, useState} from 'react';
import { Button, Display } from '@fluentui/react-components';
import { AbilityContext } from '@/casl/abilityFor';
import { Can } from '@/casl/abilityFor';
import defineAbilitiesFor from '@/casl/abilityFor';

const Home = () => {
  // const {ability} = useContext(AbilityContext);
  const [isAbleToRead, setIsAbleToRead] = useState(false)
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);
  useEffect(() =>{
    const whoAmI:string = 'user';
    const role = defineAbilitiesFor(whoAmI)
    setIsAbleToRead(role.can('read','post'));
    setIsAbleToDelete(role.can('delete','post'));

  },[])
 return(
    <div>
     {isAbleToRead && <Display>You can read it </Display>}
     {isAbleToDelete && <Button>You can delete</Button>}
      <Can not I="read" this="post">
        <h1>YOu are not allowed to see the content !!</h1>
      </Can>
    </div>
 );
};

export default Home;
