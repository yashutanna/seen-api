const ArtistTransformer = require("./artist")
const ArtistOutputTransformer = require("./artist/output")
const CollectableTransformer = require("./collectable")
const CollectableOutputTransformer = require("./collectable/output")
const CollectableSaleTangibleTransformer = require("./collectable/sale")
const CollectableAuctionTransformer = require("./collectable/auction")
const MediaTransformer = require("./media")
const MediaOutputTransformer = require("./media/output")
const UserTransformer = require("./user")
const UserOutputTransformer = require("./user/output")
const UserEmailPreferencesTransformer = require("./user_email_preferences");
const UserEmailPreferencesOutputTransformer = require("./user_email_preferences/output");
const FeaturedDropTransformer = require("./featured_drop")

module.exports = Object.freeze({
    ArtistTransformer,
    ArtistOutputTransformer,
    CollectableTransformer,
    CollectableOutputTransformer,
    CollectableSaleTangibleTransformer,
    CollectableAuctionTransformer,
    MediaTransformer,
    MediaOutputTransformer,
    UserTransformer,
    UserOutputTransformer,
    UserEmailPreferencesTransformer,
    UserEmailPreferencesOutputTransformer,
    FeaturedDropTransformer,
});
