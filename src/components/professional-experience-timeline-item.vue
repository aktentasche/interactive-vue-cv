 <template>
  <v-timeline-item right>
    <v-card>
    <v-card-title>
          <v-img :src="entry.entity_image" height="60px" contain/>
        </v-card-title>

     {{ entry.title }}
      
    </v-card>

    <template v-slot:opposite>
      <div class="align-top">
        <span v-text="entry.start"/>
        -
        <span v-text="entry.end"/>
      </div>
      </template>

  </v-timeline-item>

 <!--
 <v-timeline-item
            v-for="professional_experience_entry of $t('professional_experience')" :key=professional_experience_entry.title
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">Lorem ipsum</h2>
              <div>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </div>
            </div>
          </v-timeline-item>
-->
</template>

<script>
export default {    
    props: {
        entry: Object,
    },
    computed:{
      entity_image_location: function(){
        //have to use require here instead of directly binding, otherwise
        //require is executed at every tick
        return require(this)
      }
    }
    
}
</script>