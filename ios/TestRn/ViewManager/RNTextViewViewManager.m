//
//  RNTextViewViewManager.m
//  TestRn
//
//  Created by 岳立兴 on 2024/2/26.
//

#import <UIKit/UIKit.h>
#import "RNTextViewViewManager.h"
#import "RNTextView.h"

@interface RNTextViewViewManager()

@end

@implementation RNTextViewViewManager

RCT_EXPORT_MODULE(RNTextView)

RCT_EXPORT_VIEW_PROPERTY(text, NSString)
RCT_EXPORT_VIEW_PROPERTY(callback, RCTDirectEventBlock)

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

