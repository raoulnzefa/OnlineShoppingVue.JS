<template>
    <div class="app">
        <upperheader-component class="d-none d-md-block"></upperheader-component>
        <lowerheader-component></lowerheader-component>
    </div>
</template>
<script>
import UpperHeader from './UpperHeader/UpperHeader';
import LowerHeader from './LowerHeader/LowerHeader';
export default {
    components:{
        upperheaderComponent:UpperHeader,
        lowerheaderComponent:LowerHeader
    }
}
</script>