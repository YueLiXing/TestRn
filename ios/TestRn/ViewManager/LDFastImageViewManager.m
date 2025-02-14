#import "LDFastImageViewManager.h"
//#import "FFFastImageView.h"
#import "LDFastImageView.h"

//#import <SDWebImage/SDImageCache.h>
//#import <SDWebImage/SDWebImagePrefetcher.h>

@implementation LDFastImageViewManager

RCT_EXPORT_MODULE(CloseliCamera)

- (LDFastImageView*)view {
  LDFastImageView *temp = [[LDFastImageView alloc] init];
  temp.viewManagerTag = @"LDFastImageViewManager";
  return temp;
}

RCT_EXPORT_VIEW_PROPERTY(uri, NSString)
RCT_EXPORT_VIEW_PROPERTY(onCallback, RCTDirectEventBlock)


@end
