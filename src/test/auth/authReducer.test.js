import authReducer from '../../auth/authReducer'
import {types} from '../../types/types'

describe('Pruebas en authReducer', ()=>{
    test('Debe retornar el estado por defecto', ()=>{
        
        //initial state false!!

        const state = authReducer({logged:false}, {})

        //Waiting for false state if initial state is equal to false!!

        expect(state).toEqual({logged: false});
    
    })


    test('Debe autenticar y colocar el name del usuario', ()=>{
        
        //Creating Action
        const action = {
            type: types.login,
            payload: {
                name: 'David'
            }
        }

        //Action sent to reducer
        const state = authReducer({logged:false}, action)
        //Waiting for logged equal to true, and name 'David'
        expect(state).toEqual({
            logged: true,
            name: 'David'
        });
    
    });


    test('Debe de borrar el nombre de usuario y fijar "logged" en false', ()=>{

        const action = {
            type: types.logout,
        }

        // Default state 
        const state = authReducer({logged: false, name: 'David'}, action);

        // It's waited for logged equals to false after action execution, and has no user.
        expect(state).toEqual({logged:false});
    })

})

