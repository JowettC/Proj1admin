<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Add Workshop
        </button>
        <b-modal 
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <template>
                <div>
                    <form>
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Add Workshop</p>
                        <button
                            type="button"
                            class="delete"
                            @click="isComponentModalActive = false"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Title">
                            <b-input  v-model="title" required></b-input>
                        </b-field>
                        <b-field label="Description">
                            <b-input  v-model="description" required></b-input>
                        </b-field>
                        <b-field label="Location">
                            <b-input  v-model="location" required></b-input>
                        </b-field>
                        <b-field label="Select datetime">
                            <b-datetimepicker
                                v-model="dateTime"
                                placeholder="Click to select..."
                                icon="calendar-today"
                                horizontal-time-picker
                                required>
                            </b-datetimepicker>
                        </b-field>
                    </section>
                    
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="isComponentModalActive = false">Close</button>
                        <button class="button is-primary">Submit</button>
                    </footer>
                </div>
            </form>
                </div>
            </template>
        </b-modal>
    </section>
</template>

<script>
    export default {
        name:'add-workshop-modal',
        data() {
            return {
                title:null,
                description:null,
                location:null,
                dateTime:null,
                isComponentModalActive: false,
            }
        }
    }
</script>
<style scoped>
.modal-card{
    width:500px !important;
}
</style>