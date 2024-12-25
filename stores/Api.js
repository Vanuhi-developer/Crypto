import {defineStore} from 'pinia'

export const useMyApi = defineStore('myApi',{
    state:() => ({
        myData: null,
        myPostsData:null,
        myPostsRight:null
    }),
    actions: {
        async fetchData() {
          try {
            const response = await fetch(useRuntimeConfig().public.apiBaseURL+'/get-settings', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({api_key: useRuntimeConfig().public.apiKey})
            });
            const data = await response.json();
            this.myData = data;
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async fetchData1(state) {
          try {
            const response = await fetch(`${useRuntimeConfig().public.apiGetPostsURL}${state}&limit=10`,{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({api_key: useRuntimeConfig().public.apiKey})
            });
            const data = await response.json();
            this.myPostsData = data;
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async fetchData2(state) {
          try {
            const response = await fetch(`${useRuntimeConfig().public.apiGetRightURL}${state}&limit=10`,{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({api_key: useRuntimeConfig().public.apiKey})
            });
            const data = await response.json();
            this.myPostsRight = data;
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        
      },

})