"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90099"],
  {
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(442837),
        i = n(481060),
        r = n(906732),
        c = n(48217),
        s = n(26323),
        l = n(430824),
        u = n(914010),
        d = n(709586),
        _ = n(981631),
        b = n(30513),
        f = n(689938),
        g = n(364042);
      function E(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: E, banner: m } = e,
          R = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
          p = (0, o.e7)([l.Z], () => l.Z.getGuild(R)),
          { analyticsLocations: I } = (0, r.ZP)();
        return null == p ||
          p.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!E && p.hasFeature(_.oNc.BANNER))
          ? null
          : (0, a.jsxs)("div", {
              className: g.container,
              children: [
                (0, a.jsx)(d.Z, { className: g.guildBoostingIcon }),
                (0, a.jsx)(i.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: f.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, a.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.LINK,
                  className: g.subscribeButton,
                  onClick: () => {
                    if (null == p) return;
                    let e = {
                      section: t,
                      page: n,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != m
                      ? (0, c.c)({
                          analyticsLocations: I,
                          analyticsLocation: e,
                          guild: p,
                          isGIF: E,
                          banner: m,
                        })
                      : (0, s.Z)({
                          analyticsLocations: I,
                          analyticsSourceLocation: e,
                          guild: p,
                          perks: E ? (0, b.zC)() : (0, b.XO)(),
                        });
                  },
                  children: f.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    321867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var a = n(735250),
        o = n(470079),
        i = n(442837),
        r = n(481060),
        c = n(100527),
        s = n(906732),
        l = n(112831),
        u = n(411477),
        d = n(197115),
        _ = n(594174),
        b = n(626135),
        f = n(74538),
        g = n(981631),
        E = n(486324),
        m = n(474936),
        R = n(689938),
        p = n(634387);
      function I(e) {
        let { analyticsSection: t, type: n } = e,
          I = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
          v = f.ZP.canUseAnimatedAvatar(I),
          h = f.ZP.canUsePremiumProfileCustomization(I),
          P = (n === E.pC.BANNER && h) || (n === E.pC.AVATAR && v),
          { sourceAnalyticsLocations: x } = (0, s.ZP)(
            c.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !P &&
              b.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: x,
              });
          }, [P, t, x]),
          P)
        )
          return null;
        let C = (0, a.jsx)(d.Z, {
          className: p.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: m.Si.TIER_2,
          buttonText: R.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, a.jsx)(u.Z, {
          reducedRightPadding: !0,
          className: p.nitroPreviewUpsell,
          text: R.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: l.Z.Sizes.SIZE_14,
          textColor: l.Z.Colors.HEADER_PRIMARY,
          button: C,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(180781),
        i = n(321867),
        r = n(486324);
      function c(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: c,
          isGIF: s,
          banner: l,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(t) && s
          ? (0, a.jsx)(i.Z, { analyticsSection: c, type: t })
          : t === r.pC.GUILD_BANNER
            ? (0, a.jsx)(o.Z, {
                analyticsSection: c,
                analyticsPage: n,
                isGIF: s,
                banner: l,
              })
            : null;
      }
    },
    411477: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(120356),
        i = n.n(o),
        r = n(481060),
        c = n(436774),
        s = n(112831),
        l = n(148393);
      function u(e) {
        let {
          text: t,
          textSize: n = s.Z.Sizes.SIZE_12,
          textColor: o = s.Z.Colors.STANDARD,
          className: u,
          button: d,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, a.jsxs)("div", {
          className: i()(
            _ ? l.noticeWithoutRightPadding : l.noticeWithRightPadding,
            u,
          ),
          children: [
            (0, a.jsxs)("div", {
              className: l.noticeLeft,
              children: [
                (0, a.jsx)(r.NitroWheelIcon, {
                  size: "md",
                  className: l.icon,
                  color: c.JX.PREMIUM_TIER_2,
                }),
                (0, a.jsx)(s.Z, {
                  className: l.text,
                  size: n,
                  color: o,
                  children: t,
                }),
              ],
            }),
            d,
          ],
        });
      }
    },
    57739: function (e, t, n) {
      e.exports = {
        modalContent: "modalContent_ba5b9e",
        editingContainer: "editingContainer_ba5b9e",
        imageEnabled: "imageEnabled_ba5b9e image_ba5b9e",
        imageDisabled: "imageDisabled_ba5b9e image_ba5b9e",
        icon: "icon_ba5b9e",
        overlayAvatar: "overlayAvatar_ba5b9e overlay_ba5b9e",
        overlayBanner: "overlayBanner_ba5b9e overlay_ba5b9e",
        sliderContainer: "sliderContainer_ba5b9e",
        nitroUpsell: "nitroUpsell_ba5b9e",
        cancelButton: "cancelButton_ba5b9e",
        modalFooter: "modalFooter_ba5b9e",
        buttonsRight: "buttonsRight_ba5b9e",
        titleCase: "titleCase_ba5b9e",
      };
    },
    364042: function (e, t, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    634387: function (e, t, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    734471: function (e, t, n) {
      e.exports = { container: "container_e62679" };
    },
    148393: function (e, t, n) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    821774: function (e, t, n) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
        avatarImage: "avatarImage_b2a2a3",
      };
    },
    706995: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=0e7bd81bf97db552734a.js.map
