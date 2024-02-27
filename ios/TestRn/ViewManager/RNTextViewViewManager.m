//
//  RNTextViewViewManager.m
//  TestRn
//
//  Created by 岳立兴 on 2024/2/26.
//

#import <UIKit/UIKit.h>
#import <React/RCTUIManager.h>
#import "RNTextViewViewManager.h"
#import "RNTextView.h"

//@interface RCT_EXTERN_MODULE(RNTextViewViewManager, RCTViewManager)
@interface RNTextViewViewManager()

@end

@implementation RNTextViewViewManager

RCT_EXPORT_MODULE(RNTextView)

//RCT_EXPORT_VIEW_PROPERTY(callback, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(text, NSString)
RCT_EXPORT_VIEW_PROPERTY(callback, RCTDirectEventBlock)
//RCT_EXPORT_VIEW_PROPERTY(onFastImageLoadStart, RCTDirectEventBlock)

- (RNTextView *)view {
  RNTextView *label = [[RNTextView alloc] init];
  label.backgroundColor = UIColor.orangeColor;
  return label;
}

RCT_EXPORT_METHOD(clean:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
    resolve(@"NULL");
}

@end

