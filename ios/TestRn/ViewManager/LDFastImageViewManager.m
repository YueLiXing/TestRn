#import "LDFastImageViewManager.h"
//#import "FFFastImageView.h"
#import "LDFastImageView.h"

//#import <SDWebImage/SDImageCache.h>
//#import <SDWebImage/SDWebImagePrefetcher.h>

@implementation LDFastImageViewManager

RCT_EXPORT_MODULE(LDFastImageView)

- (LDFastImageView*)view {
  return [[LDFastImageView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(uri, NSString)
RCT_EXPORT_VIEW_PROPERTY(onFastImageLoad, RCTDirectEventBlock)


@end
