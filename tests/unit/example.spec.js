import { shallowMount } from "@vue/test-utils"
import Home from "@/views/Home"


describe('Testing Home component', () => {
  const wrapper = shallowMount(Home)
  const vm = wrapper.vm
  it('renders the correct heading', () => {
    expect(wrapper.html()).toContain('<h1>Adopt a Pet</h1>')
  })

  it('has an add button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('button should click the form', () => {
    expect(wrapper.vm.showPetForm).toBe(false)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.showPetForm).toBe(true)
  })

})
