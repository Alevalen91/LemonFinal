import { useRef, useEffect } from 'react';

export const validateEmail = (email) => {
    return Boolean(email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ));
  };
  

  export const validateName = name => {
    return Boolean(name.match(/^[a-zA-Z]+$/));
  };

  export function getSectionListData(data) {


    let objApp = {title: 'Appetizers', data: 
    Array.from(data.filter(y=> y.category == 'Appetizers')).map((x) => ({
      id: x.id,
      title: x.title,
      price: x.price
    }))};
  
    let objSalad = {title: 'Salads', data:
     Array.from(data.filter(y=> y.category == 'Salads')).map((x) => ({
      id: x.id,
      title: x.title,
      price: x.price
    }))};
  
    let objBever = {title:'Beverages', data:
    Array.from(data.filter(y=> y.category == 'Beverages')).map((x) => ({
      id: x.id,
      title: x.title,
      price: x.price
    }))};
  
   let toRet = new Array();
    if(objApp.data.length>0){
    toRet.push(objApp)
  }
  
  if(objBever.data.length>0){
    toRet.push(objBever)
  }
  
  if(objSalad.data.length>0){
    toRet.push(objSalad)
  }
 
    return toRet;
  }
  
  export function useUpdateEffect(effect, dependencies = []) {
    const isInitialMount = useRef(true);
  
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    }, dependencies);
  }
  