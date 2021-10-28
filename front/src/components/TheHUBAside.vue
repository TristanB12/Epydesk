<template>
    <aside>
        <div class="info">
            <div class="basic-infos">
                <img src="@/assets/info_icon.png" alt="info icon">
                <p>Par défaut les expérimentations ne sont pas incluses</p>
            </div>
            <p v-if="showMore">Avec l'api de l'intra il est facile d'obtenir les crédits des talks et des workshops. Par contre pour les expérimentations et les projets HUB l'opération prend plus de temps. Pour une meilleure expérience nous avons décider de ne mettre que les talks et workshops par défaut. Mais vous avez la possibilité de forcer le calcul des xps avec expérimentations et projets HUB inclus.</p>
            <span @click="toggleMoreInfos">En savoir plus</span>
        </div>
        <div class="action-container">
            <VButton
                @click.native="$emit('get-experimentations')"
                text="Recalculer avec les expérimentations"
                :textSize="16"
            />
            <span>~Environ 2min</span>
        </div>
    </aside>
</template>

<script>
import VButton from '@/components/VButton.vue';
    export default {
        components: {
            VButton,
        },
        data() {
            return {
                showMore: false
            }
        },
        methods: {
            toggleMoreInfos() {
                this.showMore = !this.showMore;
            }
        },
    }
</script>

<style lang="scss" scoped>
aside {
    width: 80%;
    margin-bottom: 30px;
}
.info {
    position: relative;
    width: 100%;
    padding: 10px 20px 30px;
    background-color: rgba($color: #939393, $alpha: 0.11);
    border-radius: 10px;

    span {
        position: absolute;
        right: 10%;
        bottom: 10%;
        color: #00A3FF;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}
.basic-infos {
    display: flex;
    justify-content: space-around;
}
img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
}
.action-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 768px) {
    aside {
        width: 100%;
    }
}
</style>