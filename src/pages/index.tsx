// Home.js
import React, {useContext, useEffect, useState} from 'react';
import { Button, Display } from '@fluentui/react-components';
import { AbilityContext } from '@/casl/abilityFor';
import { Can } from '@/casl/abilityFor';
import defineAbilitiesFor from '@/casl/abilityFor';

const Home = () => {
  const {ability} = useContext(AbilityContext);
  const [isAbleToRead, setIsAbleToRead] = useState(false)
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);
  useEffect(() =>{
    let whoAmI = 'admin';
    const role = defineAbilitiesFor(whoAmI)
    setIsAbleToRead(role.can('read','post'));
    setIsAbleToDelete(role.can('delete','post'));

  })
 return(
    <div>
     {isAbleToRead && <Display>You can read it </Display>}
     {isAbleToDelete && <Button>You can delete</Button>}
      
    </div>
 );
};

export default Home;
