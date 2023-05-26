<template>
        <nav
            class="navbar navbar-expand-lg navbar-light bg-light"
            >
                <router-link to="/" class="navbar-brand" href="#">Easyfit</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" 
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav me-auto">
                        <router-link to="/fitness" class="nav-item nav-link">Fitness</router-link>
                        <router-link to="/nutricion" class="nav-item nav-link">Nutricion</router-link>
                        <router-link to="/perfil" class="nav-item nav-link">Perfil</router-link>
                    </div>
                </div>
        </nav>
</template>