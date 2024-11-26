<script setup>
import {ref} from 'vue';

const openSection = ref('overview');

function toggleSection(section) {
  openSection.value = openSection.value === section ? null : section;
}


</script>

<template>
  <div class="container min-h-screen mx-auto px-4 py-10">


    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'overview' }]"
        @click="toggleSection('overview')">
      <div class="collapse-title text-xl font-medium text-primaryGrey ">Company Overview</div>
      <div class="collapse-content text-justify text-lg text-primaryGrey leading-relaxed">
        <p class="text-primaryGrey">
          From industrial buildings and hospitals to hotels, schools, shopping centers, sports facilities, and mosques,
          our projects embody diversity and inclusivity, focusing on developing infrastructure that drives progress.
          With our extensive experience and innovative vision, we combine modernity and sustainability to deliver
          projects that meet the highest standards of quality and economic efficiency.
          This is why investors consider us trusted partners for long-term investments, as we offer more than just
          construction solutions—we offer a sustainable future and projects that maintain their distinction for years to
          come.
        </p>
      </div>
    </div>


    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'vision' }]"
        @click="toggleSection('vision')">
      <div class="collapse-title text-xl font-medium text-gray-700">Vision</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <div class="text-xl font-medium text-primaryRed">Building The Future: Leading Innovation And Sustainability In
          Construction Projects
        </div>
        <p>
          In the fast-paced world of construction, where innovation and sustainability take center stage, Yapisu is
          redefining the future with new standards. We don’t just offer comprehensive non-residential construction
          services; we design architectural experiences that make a difference. Our modern engineering solutions enhance
          project quality, reduce environmental impact, and inspire a legacy of long-term excellence.
          The company excels in blending innovative designs with the latest technologies and an unwavering commitment to
          quality to deliver projects that meet the highest standards of efficiency and safety. We focus on building
          smart facilities that reduce long-term costs and enhance operational efficiency, all while preserving natural
          resources and supporting sustainable development goals.
        </p>
      </div>
    </div>


    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'mission' }]"
        @click="toggleSection('mission')">
      <div class="collapse-title text-xl font-medium text-gray-700">Mission</div>
      <div class="collapse-content text-lg text-gray-600 leading-relaxed">
        <div class="text-xl font-medium text-primaryRed">Excellence In Construction: Our Commitment To Driving Change
        </div>
        <p>
          Our mission is to empower our clients to transform their visions into reality, whether in building commercial
          complexes, healthcare facilities, or advanced infrastructure projects.
          We achieve this through a collaborative approach that places clear communication, integrity, and attention to
          detail at the heart of our work—from conception to project delivery.
          With a focus on long-term impact, we do not merely construct buildings but help shape resilient communities
          and environments that are capable of facing future challenges, fostering growth, prosperity, and success for
          all stakeholders.
          Our philosophy is that construction is more than just routine work; it’s a promise of excellence, attention to
          detail, innovation, and a commitment to building a sustainable future for generations to come.
        </p>
      </div>
    </div>


    <div
        tabindex="0"
        :class="['collapse', 'collapse-arrow', 'my-10', { 'collapse-open': openSection === 'Efficiency' }]"
        @click="toggleSection('Efficiency')">
      <div class="collapse-title text-xl font-medium text-gray-700">Efficiency</div>
      <div class="  collapse-content text-lg text-gray-600 leading-relaxed">
        <div class="text-xl font-medium text-primaryRed">Distinct Pillars: Enduring Efficiency And Continuous Progress
        </div>
        <p>
          In the ever-evolving world of construction, Yapisu stands out as a name synonymous with efficiency and
          excellence. Understanding that success is not only measured by experience but also by the ability to adapt to
          changes, utilize resources smartly, and apply the highest engineering standards, the company has established
          itself as a leader in the sector.
          The company places great emphasis on human resources, believing that trained and innovative teams are the
          backbone of any successful project. This is why we continually invest in developing our teams’ skills through
          specialized training programs, equipping them with the latest technologies and knowledge to ensure innovative,
          high-quality solutions at every stage of construction.</p>
      </div>
    </div>


  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.collapse-title {
  cursor: pointer;
}

.timeline-hr {
  background-color: black;
  transition: background-color 0.3s ease-in-out; /* Smooth transition */


}

li:hover .timeline-hr {
  background-color: #E62D18;

}

</style>
