<script setup>
    const appConfig = useAppConfig()
    const theme = useTheme()
    const business = useBusiness()
    // add query theme name [preview mode]
    const fetchData  = async () => {
        // const stagingAPI = `https://staging.hitpay.shop/juizzy/shop-api/storefront`;
        const { data } = await useFetch(`https://staging.hitpay.shop/juizzy/shop-api/storefront`, {
            params: {
                _shop_url: useRequestURL().toString() // use root shop_url
            }
        })

        theme.value = {
            name: data.value?.name,
            store_design: data.value?.store_design
        }
        business.value = data.value?.business
    }
    await fetchData();
 </script>
<template>
    <div>
      ( layout theme name : {{ theme?.name }}) 
     <slot/>
     <div>
        business id : {{ business?.id }}
     </div>

    <button @click="fetchData">Refetch</button>
    </div>
</template>