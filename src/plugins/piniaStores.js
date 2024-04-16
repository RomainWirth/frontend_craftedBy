// import stores
import { useArtisanStore } from '@/stores/ArtisanStore'
import { useCartStore } from '@/stores/CartStore'
import { useItemStore } from '@/stores/ItemStore'
import { useUserStore } from '@/stores/UserStore'

export default {
  install: (app) => {
    // use of stores as global variables
    app.config.globalProperties.$Item = useItemStore()
    app.config.globalProperties.$Cart = useCartStore()
    app.config.globalProperties.$User = useUserStore()
    app.config.globalProperties.$Artisan = useArtisanStore()
  }
}
