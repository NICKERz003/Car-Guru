<template>
    <div>
        <header-component />
        <navbar-component />
        <div id="content">
        <h1>Car Detail</h1>
        <p>Car ID: {{ $route.params.id }}</p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#content {
    padding: 20px;
}
</style>
